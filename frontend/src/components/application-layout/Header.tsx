import LogoLink from "./LogoLink.js";
import Slogan from "./Slogan.js";
import '../../css/LogoLink.css'
import '../../css/hedaer.css'

export default function Hedaer() {
  return (
    <div className="hedaer">
        <LogoLink />
        <Slogan/>
    </div>
  );
}
