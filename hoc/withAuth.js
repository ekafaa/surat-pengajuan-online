import { useRouter } from "next/router";
import { useEffect } from "react";
import { decodeJwtToken, getJwtToken } from "../utils/utilization";
import { ROUTES, allowedPathsAdmin, allowedPathsUser } from "../utils/constant";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    const isValidDynamicPath = (path) => {
      const dynamicSegment = path.split("/").pop();
      const dynamicSegmentWithoutExtension = dynamicSegment.split(".")[0]; // Exclude the file extension
      const isDynamicPath = allowedPathsUser.some((allowedPath) => {
        const allowedDynamicSegment = allowedPath.split("/").pop();
        return dynamicSegmentWithoutExtension === allowedDynamicSegment;
      });
      return isDynamicPath;
    };

    useEffect(() => {
      const token = getJwtToken();
      const decode = decodeJwtToken(token);
      if (!token || !decode || typeof decode.role === "undefined") {
        router.push(ROUTES.LOGIN());
      } else if (decode.role === "user") {
        const isAllowedPath =
          allowedPathsUser.includes(router.pathname) &&
          isValidDynamicPath(router.pathname);
        if (!isAllowedPath) {
          console.log("whyyy");
          router.push(ROUTES.USER_DASHBOARD());
        }
      } else if (!allowedPathsAdmin.includes(router.pathname)) {
        router.push(ROUTES.ADMIN_DASHBOARD());
      }
    }, [router.pathname]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
