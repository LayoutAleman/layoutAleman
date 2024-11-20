import nodemailer from "nodemailer";
import "../../../chunks/index.js";
import { convert } from "html-to-text";
import pretty from "pretty";
import { c as create_ssr_component, k as compute_rest_props, f as spread, g as escape_object, l as escape_attribute_value, b as add_attribute, v as validate_component, e as escape } from "../../../chunks/ssr.js";
const styleToString = (style) => {
  return Object.keys(style).reduce((acc, key) => acc + key.split(/(?=[A-Z])/).join("-").toLowerCase() + ":" + style[key] + ";", "");
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["style"]);
  let { style = {} } = $$props;
  const styles = { maxWidth: "37.5em", ...style };
  const inlineStyle = styleToString(styles);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  return `<div><!-- HTML_TAG_START -->${`<!--[if mso | IE]>
          <table role="presentation" width="100%" align="center" style="${inlineStyle}"><tr><td></td><td style="width:37.5em;background:#ffffff">
        <![endif]-->`}<!-- HTML_TAG_END --></div> <div${spread(
    [
      escape_object($$restProps),
      {
        style: escape_attribute_value(inlineStyle)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div> <div><!-- HTML_TAG_START -->${`<!--[if mso | IE]>
          </td><td></td></tr></table>
          <![endif]-->`}<!-- HTML_TAG_END --></div>`;
});
const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["style"]);
  let { style = {} } = $$props;
  const styleDefault = {
    width: "100%",
    border: "none",
    borderTop: "1px solid #eaeaea",
    ...style
  };
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  return `<hr${spread(
    [
      {
        style: escape_attribute_value(styleToString(styleDefault))
      },
      escape_object($$restProps)
    ],
    {}
  )}>`;
});
const Html = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["lang"]);
  let { lang = "en" } = $$props;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
  return `<html${spread(
    [
      escape_object($$restProps),
      { id: "__svelte-email" },
      { lang: escape_attribute_value(lang) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</html>`;
});
const Img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["style", "alt", "src", "width", "height"]);
  let { style = {} } = $$props;
  let { alt = "" } = $$props;
  let { src = "" } = $$props;
  let { width = "0" } = $$props;
  let { height = "0" } = $$props;
  const styleDefault = {
    display: "block",
    outline: "none",
    border: "none",
    textDecoration: "none",
    ...style
  };
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  return `<img${spread(
    [
      { alt: escape_attribute_value(alt) },
      { src: escape_attribute_value(src) },
      { width: escape_attribute_value(width) },
      { height: escape_attribute_value(height) },
      {
        style: escape_attribute_value(styleToString(styleDefault))
      },
      escape_object($$restProps)
    ],
    {}
  )}>`;
});
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["style"]);
  let { style = {} } = $$props;
  const styleDefaultTable = { width: "100%", ...style };
  const styleDefaultTr = {
    display: "grid",
    gridAutoColumns: "minmax(0, 1fr)",
    gridAutoFlow: "column"
  };
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  return `<table${spread(
    [
      {
        style: escape_attribute_value(styleToString(styleDefaultTable))
      },
      { align: "center" },
      { border: escape_attribute_value(0) },
      { cellpadding: escape_attribute_value(0) },
      { cellspacing: escape_attribute_value(0) },
      { role: "presentation" },
      escape_object($$restProps)
    ],
    {}
  )}><tbody><tr${add_attribute("style", styleToString(styleDefaultTr), 0)}>${slots.default ? slots.default({}) : ``}</tr></tbody></table>`;
});
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["style"]);
  let { style = {} } = $$props;
  const styleDefault = {
    fontSize: "14px",
    lineHeight: "24px",
    margin: "16px 0",
    ...style
  };
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  return `<p${spread(
    [
      {
        style: escape_attribute_value(styleToString(styleDefault))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</p>`;
});
const render = ({ template, props, options }) => {
  const { html } = (
    // @ts-ignore
    template.render(props)
  );
  if (options?.plainText) {
    return renderAsPlainText(html);
  }
  const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
  const markup = html;
  const document = `${doctype}${markup}`;
  if (options?.pretty) {
    return pretty(document);
  }
  return document;
};
const renderAsPlainText = (markup) => {
  return convert(markup, {
    selectors: [
      { selector: "img", format: "skip" },
      { selector: "#__svelte-email-preview", format: "skip" }
    ]
  });
};
const Contacto = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { email = "" } = $$props;
  let { phone = "" } = $$props;
  let { mensaje = "" } = $$props;
  let { logo = "" } = $$props;
  const main = { backgroundColor: "#000000" };
  const container = {
    margin: "0 auto",
    padding: "20px 10px",
    width: "660px",
    maxWidth: "700px"
  };
  const heading = {
    fontFamily: "Raleway",
    fontSize: "32px",
    fontWeight: "800",
    color: "#ffffff"
  };
  const label = {
    margin: "15px 0 0 0",
    fontSize: "15px",
    fontWeight: "300"
  };
  const text = { fontSize: "20px" };
  const margin = { fontSize: "20px 48px" };
  if ($$props.email === void 0 && $$bindings.email && email !== void 0) $$bindings.email(email);
  if ($$props.phone === void 0 && $$bindings.phone && phone !== void 0) $$bindings.phone(phone);
  if ($$props.mensaje === void 0 && $$bindings.mensaje && mensaje !== void 0) $$bindings.mensaje(mensaje);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0) $$bindings.logo(logo);
  return `${validate_component(Html, "Html").$$render($$result, { lang: "en" }, {}, {
    default: () => {
      return `${validate_component(Section, "Section").$$render($$result, { style: main }, {}, {
        default: () => {
          return `${validate_component(Container, "Container").$$render($$result, { style: container }, {}, {
            default: () => {
              return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
                default: () => {
                  return `<table><tbody><tr><td${add_attribute("width", 320, 0)}>${validate_component(Img, "Img").$$render(
                    $$result,
                    {
                      src: `${logo}`,
                      height: "85",
                      width: "130",
                      alt: "Layout Aleman"
                    },
                    {},
                    {}
                  )}</td> <td${add_attribute("width", 300, 0)}>${validate_component(Text, "Text").$$render($$result, { style: heading }, {}, {
                    default: () => {
                      return `Nuevo Mensaje`;
                    }
                  })}</td></tr></tbody></table>`;
                }
              })}`;
            }
          })}`;
        }
      })} ${validate_component(Section, "Section").$$render($$result, { style: margin }, {}, {
        default: () => {
          return `<table><tbody><tr><td>${validate_component(Text, "Text").$$render($$result, { style: label }, {}, {
            default: () => {
              return `EMAIL:  ${escape(email)}`;
            }
          })} <br> ${validate_component(Text, "Text").$$render($$result, { style: label }, {}, {
            default: () => {
              return `TELEFONO:  ${escape(phone)}`;
            }
          })}</td></tr> <tr><td>${validate_component(Text, "Text").$$render($$result, { style: label }, {}, {
            default: () => {
              return `MENSAJE:`;
            }
          })} ${validate_component(Text, "Text").$$render($$result, { style: text }, {}, {
            default: () => {
              return `${escape(mensaje)}`;
            }
          })}</td></tr></tbody></table>`;
        }
      })} ${validate_component(Hr, "Hr").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const correo_layout = data.get("correo_layout");
    const phone = data.get("phone");
    const logo = data.get("logo");
    const mensaje = data.get("mensaje");
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      // true for port 465, false for other ports
      auth: {
        user: "layoutalemanweb@gmail.com",
        pass: "dnodqraaqrabvkfn"
      }
    });
    const emailHtml = render({
      template: Contacto,
      props: {
        email,
        phone,
        mensaje,
        logo
      }
    });
    const options = {
      from: "you@example.com",
      to: correo_layout.toString(),
      subject: "Contacto Pagina web",
      html: emailHtml
    };
    const info = await transporter.sendMail(options);
    if (info.messageId) return { success: true };
    else return { success: false };
  }
};
export {
  actions
};
