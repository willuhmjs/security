import type { Actions } from './$types';
import { SerialPort } from 'serialport'
import { SERIAL_PATH } from "$env/static/private";

console.log(SERIAL_PATH);

const port = new SerialPort({
    path: SERIAL_PATH,
    baudRate: 9600
});

export const actions ={
	default: async ({ request }) => {
        const data = await request.formData();
        const number = data.get("number");
        if (typeof number === "string") {
            port.write(number.toString());
        }
    },
} satisfies Actions;
