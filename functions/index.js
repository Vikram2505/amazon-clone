/* eslint-disable max-len */
const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51K07gjSCVMtWr89YpdLcTV7AuXzEI80sYsAnITtzd69iXDGp3BEuphucW4GaVgYsCq2dKoelCq5cPJCYAgMGux8o00Kxrvxrh2")

// stripe.setMaxNetworkRetries(2);

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post('/payments/create', async (req, res) => {

	console.log("stripe-routes.js 9 | route reached", req.body);
	let { amount, id, description } = req.body;

	console.log("stripe-routes.js 10 | amount and id", amount);

	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: amount,
			currency: "USD",
			description: description,
			payment_method: id,
			confirm: true,
		});
		console.log("stripe-routes.js 19 | payment", paymentIntent);
		res.json({
			message: 'payment successful',
			success: true,
			clientSecret: paymentIntent.client_secret,

		})
	} catch (error) {
		console.log("stripe-routes.js 17 | error", error);
		res.json({
			message: "Payment Failed",
			success: false,
		});
	}
	//OK - created
	res.status(201).send({
		clientSecret: paymentIntent.client_secret,
	})
})


exports.api = functions.https.onRequest(app);
exports.convertLargeFile = functions
	.runWith({
		// Ensure the function has enough memory and time
		// to process large files
		timeoutSeconds: 300,
		memory: "1GB",
	})