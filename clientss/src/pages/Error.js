import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Page not found</h3>
        <p>Chúng tôi không kể tìm thấy trang mà bạn đang tìm kiếm </p>
        <Link to="/">Trở về trang chủ</Link>
      </div>
    </Wrapper>
  )
};
export default Error;
