import React from "react";
import ReactDOMServer from "react-dom-server";
import { createApp } from "servest";
import { getColors, postColor, colorDB } from "@daos/color.dao.ts";

const PORT = Deno.env.get("PORT") || 8080;
const app = createApp();

app.post("/api/colors", async (req) => {
  const bodyForm = await req.formData();
  const color = colorDB.find(e => e.name == bodyForm.value("color"));
  if(!color) await req.respond({ status: 404 })
  else {
    await postColor(color);
    req.redirect("/")
  }
})

app.get("/", async (req) => {
  await req.respond({
		status: 200,
		headers: new Headers({
			"content-type": "text/html charset=UTF-8",
		}),
		body: ReactDOMServer.renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Clase 48 | tarea</title>
        </head>
        <body style={{ backgroundColor: "#000000"}}>
          <form action="/api/colors" method="POST" style={{ color: "#ffffff" }}>
            <label htmlFor="color">Introduce un color</label>
            <input type="text" name="color" placeholder="blue, red, green, yellow"/>
            <button type="submit">Agregar color </button>
          </form>
          <ul>
            {
              (await getColors()).length != 0 &&
              (await getColors()).map(e => 
                <li style={{ color: e.color }}>
                  <p>{ e.name }</p>
                </li>
              )
            }
          </ul>
        </body>
      </html>
		),
	})
});

console.log(`Server listening in http://localhost:${PORT}`);
await app.listen(({ port: +PORT }))