import puppeteer from "puppeteer";

const parseFirefly = async () => {
	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: null
	});

	const page = await browser.newPage();

	const URL = "";

	await page.goto(URL, {
		waitUntil: "domcontentloaded",
		timeout: 60000
	});

	/* ------------------ Navigating to Login with Google ----------------- */
	const loginBtns = await page.$$('Button.MuiButtonBase-root');
	await loginBtns[0].click();
	await page.waitForNavigation();

	/* ------------------------ Logging into Google ----------------------- */

};

const authenticateGoogleAccount = async (browser, page) => {
	await page.waitForSelector('input[type="email"]');
	await page.click('input[type="email"]');

	await page.type('input[type="email"]', '');
	await page.waitForSelector('#identifierNext');
	await page.click('#identifierNext');

	await page.waitFor(500);
}

export {
	parseFirefly
}