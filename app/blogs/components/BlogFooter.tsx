import Link from "next/link";
import { VENTURE_ENABLED, VENTURE_PATH } from "@/app/lib/features";
import FooterActions from "./FooterActions";

export default function BlogFooter() {
  return (
    <footer className="landing-footer">
      <div className="footer-top">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.PNG" alt="Bodha" style={{ height: "70px", width: "auto", display: "block" }} />
          <p>Empowering individuals with the financial literacy they need to build lasting wealth.</p>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><Link href="/modules">Finance Course</Link></li>
            <li><Link href="/vcfo">Virtual CFO</Link></li>
            {VENTURE_ENABLED && <li><Link href={VENTURE_PATH}>Venture Capital</Link></li>}
            <li><Link href="/tools">Finance Tools</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/signin">Sign In</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Legal</h5>
          <ul>
            <FooterActions />
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bodha. All rights reserved.</p>
        <a href="#">Back to top &uarr;</a>
      </div>
    </footer>
  );
}
