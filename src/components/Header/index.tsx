import { FC } from "react";
import profileImage from "./../../img/Foto_perfil.jpeg";
export const Header: FC = () => (
  <header>
    <div>
      <h1>Felipe L. Silveira</h1>
      <p className="paragraph_color">FullStack Developer</p>
      <p className="paragraph_color">Lisboa - Portugal</p>
    </div>
    <div className="profile_image_container">
      <img
        src={profileImage}
        alt="Felipe L. Silveira"
        className="profile_image"
      />
    </div>
    <button
      id="btn_print_page"
      className="no-printable"
      onClick={() => window.print()}
    >
      Print it
    </button>
  </header>
);
