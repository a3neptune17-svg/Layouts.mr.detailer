"use client"

import React from "react"

const HTML_CONTENT = "<div class=\"elementor-element elementor-element-3e738b7 e-flex e-con-boxed e-con e-parent\" data-id=\"3e738b7\" data-element_type=\"container\" data-e-type=\"container\" data-settings=\"{&quot;background_background&quot;:&quot;classic&quot;}\" bis_skin_checked=\"1\">\n\t\t\t\t\t<div class=\"e-con-inner\" bis_skin_checked=\"1\">\n\t\t<div class=\"elementor-element elementor-element-37fcaf2 e-con-full e-flex e-con e-child\" data-id=\"37fcaf2\" data-element_type=\"container\" data-e-type=\"container\" data-settings=\"{&quot;background_background&quot;:&quot;classic&quot;}\" bis_skin_checked=\"1\">\n\t\t<div class=\"elementor-element elementor-element-89483ea e-con-full e-flex e-con e-child\" data-id=\"89483ea\" data-element_type=\"container\" data-e-type=\"container\" data-settings=\"{&quot;background_background&quot;:&quot;classic&quot;}\" bis_skin_checked=\"1\">\n\t\t\t\t<div class=\"elementor-element elementor-element-c0dd4dd elementor-widget elementor-widget-text-editor\" data-id=\"c0dd4dd\" data-element_type=\"widget\" data-e-type=\"widget\" data-widget_type=\"text-editor.default\" bis_skin_checked=\"1\">\n\t\t\t\t<div class=\"elementor-widget-container\" bis_skin_checked=\"1\">\n\t\t\t\t\t\t\t\t\t<p>Got a project?<br>Let’s talk.</p>\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"elementor-element elementor-element-7d19351 elementor-widget elementor-widget-ohio_heading\" data-id=\"7d19351\" data-element_type=\"widget\" data-e-type=\"widget\" data-widget_type=\"ohio_heading.default\" bis_skin_checked=\"1\">\n\t\t\t\t<div class=\"elementor-widget-container\" bis_skin_checked=\"1\">\n\t\t\t\t\t<div class=\"ohio-widget heading -left\" bis_skin_checked=\"1\">\n\n    \n    \n    <h2 class=\"title\">\n                Book an Appointment or WhatsApp.                    </h2>\n\n    \n    \n</div>\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"elementor-element elementor-element-b45f002 elementor-widget elementor-widget-ohio_button\" data-id=\"b45f002\" data-element_type=\"widget\" data-e-type=\"widget\" data-widget_type=\"ohio_button.default\" bis_skin_checked=\"1\">\n\t\t\t\t<div class=\"elementor-widget-container\" bis_skin_checked=\"1\">\n\t\t\t\t\t\n<div class=\"ohio-widget-holder -left\" bis_skin_checked=\"1\">\n    <a href=\"https://wa.me/919779397773\" target=\"_blank\" class=\"ohio-widget button -default -primary\">\n        \n        \n        WhatsApp\n            </a>\n</div>\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t</div>\t</div>\n</article>\t\t\t</main>\n\t\t</div>\n\n\t\t\t</div>\n</div>\n\n\n\t\t\t</div>\n\t\t\t\n\t\t\t";

export function Ohio3Contact() {
  return (
    <div
      data-ohio-component="contact"
      style={{ display: "contents" }}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: HTML_CONTENT }}
    />
  );
}
