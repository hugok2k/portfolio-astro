import Astrosvg from "../components/svg/astrosvg.astro"
import Css3 from "../components/svg/css3.astro"
import Google from "../components/svg/google.astro"
import Html5 from "../components/svg/html5.astro"
import Mongodb from "../components/svg/mongodb.astro"
import Next from "../components/svg/next.astro"
import Node from "../components/svg/node.astro"
import React from "../components/svg/react.astro"
import Tailwind from "../components/svg/tailwind.astro"
import Typescript from "../components/svg/typescript.astro"

export const toolsMap = {
	NextJS: Next,
	CSS: Css3,
	GoogleAPI: Google,
	ReactJS: React,
	Tailwind: Tailwind,
	Astro: Astrosvg,
	NodeJS: Node,
	MongoDB: Mongodb,
	HTML: Html5,
	TypeScript: Typescript,
} as const
