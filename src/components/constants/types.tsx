
import { navLinks, navLinksAdmin } from "./Credentials";


export type SectionName = (typeof navLinks | typeof navLinksAdmin)[number]["title"];


