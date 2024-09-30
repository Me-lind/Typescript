"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://api.example.com/data');
            if (!response.ok) {
                return [
                    'error',
                    // Imagine some improved error handling here
                    'An error occurred',
                ];
            }
            const data = yield response.json();
            return ['success', data];
        }
        catch (error) {
            return ['error', 'An error occurred'];
        }
    });
}
function exampleFunc() {
    return __awaiter(this, void 0, void 0, function* () {
        const [status, value] = yield fetchData();
        if (status === 'success') {
            console.log(value);
        }
        else {
            console.error(value);
        }
    });
}
