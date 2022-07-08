import { Component } from '@angular/core';
import { DomSanitizer,SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sanitization-in-built-angular-security';

  injectedText:string = "this is example of sanitization code <script>alert('attack!!')</script>";
  hrefCode='';
  sanitizerTrust:SafeUrl='';
  constructor(private sanitizer:DomSanitizer){
    this.hrefCode = 'javascript:alert("Hi there")';
    this.sanitizerTrust = sanitizer.bypassSecurityTrustUrl(this.hrefCode)
  }
  
}
