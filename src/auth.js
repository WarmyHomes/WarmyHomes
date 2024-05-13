import NextAuth from "next-auth"; // NextAuth kütüphanesini içe aktarır
import Credentials from "next-auth/providers/credentials"; // Kullanıcı kimlik doğrulama sağlayıcısını içe aktarır
import { login } from "./services/auth-service"; // Auth servisinden giriş işlemini içe aktarır
import { getIsTokenValid, isUserAuthorized } from "./helpers/auth"; // Token geçerliliğini kontrol etme ve kullanıcının yetkisini kontrol etme yardımcı fonksiyonlarını içe aktarır

const config = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const res = await login(credentials); // Kullanıcı kimlik bilgileriyle giriş yapılır
        const data = await res.json(); // Gelen yanıt JSON formatına dönüştürülür
        if (!res.ok) return null; // Yanıt başarısızsa null döndürülür
        // Gelen veri daha okunabilir bir hale getirilir ve payload olarak döndürülür
        const payload = {
          user: { ...data },
          accessToken: data.token, // Access token çıkarılır
        };
        delete payload.user.token; // Kullanıcı nesnesinden token alanı silinir
        return payload; // Payload döndürülür
      },
    }),
  ],
  callbacks: {
    // Middleware'in kapsama alanına giren sayfalara yapılan isteklerden hemen önce çalışır
    authorized({ auth, request: { nextUrl } }) {
  
      const isLoggedIn = !!auth?.user; // Kullanıcının oturum açmış olup olmadığını kontrol eder
      const isOnLoginPage = nextUrl.pathname.startsWith("/login"); // Giriş sayfasında olup olmadığını kontrol eder
      const isOnDashboardPage = nextUrl.pathname.startsWith("/admin/dashboard"); // Yönetici paneli sayfasında olup olmadığını kontrol eder
      const isTokenValid = getIsTokenValid(auth?.accessToken); // Access token'ın geçerli olup olmadığını kontrol eder
      if (isLoggedIn && isTokenValid) {
        if (isOnDashboardPage) {
          const isAuth = isUserAuthorized(auth.user.role, nextUrl.pathname); // Kullanıcının yetkisini kontrol eder
          console.log("isAuth", isAuth); // Yetki durumunu konsola yazdırır
          if (isAuth) return true; // Yetkilendirilmiş ise true döndürülür
          return Response.redirect(new URL("/unauthorized", nextUrl)); // Yetkilendirilmemişse /unauthorized sayfasına yönlendirilir
        } else if (isOnLoginPage) {
          return Response.redirect(new URL("/admin/dashboard", nextUrl)); // Giriş sayfasındaysa /admin/dashboard sayfasına yönlendirilir
        }
      } else if (isOnDashboardPage) {
        return false; // Yönetici paneli sayfasındaysa ve oturum açılmamışsa false döndürülür
      }
      console.log(auth?.user ? "Login olmuş" : "Login olmamış"); // Oturum durumunu konsola yazdırır
      return true; // Varsayılan olarak true döndürülür
    },
    // JWT datasına ihtiyaç duyan her route için bu callback çağrılır
    async jwt({ token, user }) {
      return { ...user, ...token }; // Kullanıcı ve token verisi birleştirilir ve döndürülür
    },
    // Session datasına ihtiyaç duyan her route için bu callback çağrılır
    async session({ session, token }) {
      session.accessToken = token.accessToken; // Oturum verisi oluşturulur ve döndürülür
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "login", // Oturum açma sayfasının URL'si belirlenir
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config); // NextAuth'ın özelliklerini dışa aktarır
