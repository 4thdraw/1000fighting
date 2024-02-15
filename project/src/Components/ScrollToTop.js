import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' //behavior 안의value값으로 instant가 들어감으로써 에니메이션 없이 바로 최상단으로 이동
        });
    }, [pathname]);

    return null;
}
