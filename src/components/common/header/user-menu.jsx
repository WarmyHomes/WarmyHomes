import { auth } from "@/auth";
import React, { useEffect, useState } from "react";

const UserMenuLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await auth();
      setIsLoggedIn(!!session?.user?.role);
    };

    fetchSession();
  }, []);

  return <div>{
    isLoggedIn ? "true" : "false"}</div>;
};

export default UserMenuLogin;
