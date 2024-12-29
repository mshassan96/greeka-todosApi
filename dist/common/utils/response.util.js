"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResponse = void 0;
function formatResponse(success, message, data = null, statusCode = 200) {
    return {
        success,
        statusCode,
        message,
        data,
    };
}
exports.formatResponse = formatResponse;
//# sourceMappingURL=response.util.js.map