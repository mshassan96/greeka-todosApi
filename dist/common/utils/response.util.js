"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResponse = formatResponse;
function formatResponse(success, message, data = null, statusCode = 200) {
    return {
        success,
        statusCode,
        message,
        data,
    };
}
//# sourceMappingURL=response.util.js.map