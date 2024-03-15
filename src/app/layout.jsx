import { Inter } from "next/font/google";
import BootstrapProvider from "@/helpers/providers/bootstrap-provider";
import { config } from "@/helpers/config";
import "@/styles/index.scss";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata = {
  title: {
    template: `%s | ${config.project.name}`,
    default: config.project.name, // a default is required when creating a template
  },
  description: config.project.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <BootstrapProvider>{children}</BootstrapProvider>
      </body>
    </html>
  );
}
