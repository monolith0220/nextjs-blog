// libs/client.js
import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "monolith",
	apiKey: process.env.API_KEY,
});
