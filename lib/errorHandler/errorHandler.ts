export default function errorHandler(res: any, status: string, statusCode?: number, message?: string) {
	return res
		.status(statusCode)
		.json({ status: status || "Feil", statusCode: res.statusCode || 500, message: message || "An unknown error occured" });
}
