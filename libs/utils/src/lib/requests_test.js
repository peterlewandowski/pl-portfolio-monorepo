function getResponse(valid_auth_tokens, method, url) {
    const urlParts = new URL(url);
    const params = new URLSearchParams(urlParts.search);
    const token = params.get('token'); // Extract the token from URL parameters

    // Check if the token is in the list of valid tokens
    if (!valid_auth_tokens.includes(token)) {
        return "INVALID";
    } else {
        // For POST requests, check the CSRF token
        if (method === "POST" && !params.get("csrf")) {
            return "INVALID";
        } else {
            // Extract URL parameters, excluding "token" and "csrf"
            let response = "";
            let isFirstParam = true;
            for (const [key, value] of params.entries()) {
                if (key !== "token" && key !== "csrf") {
                    response += isFirstParam ? "" : ",";
                    response += `${key},${value}`;
                    isFirstParam = false;
                }
            }
            return isFirstParam ? "VALID" : `VALID,${response}`; // Adjust based on whether any params were added
        }
    }
}
