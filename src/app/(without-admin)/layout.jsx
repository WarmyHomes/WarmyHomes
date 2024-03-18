import { config } from "@/helpers/config";
import "@/styles/index.scss";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

export const metadata = {
  title: {
    template: `%s | ${config.project.name}`,
    default: config.project.name, // a default is required when creating a template
  },
  description: config.project.description,
};

export default function UserLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
