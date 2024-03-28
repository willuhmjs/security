import type { Actions } from './$types';
import { SerialPort } from 'serialport'
import { PATH } from "$env/static/private";


const port = new SerialPort({
    path: "/dev/serial/by-id/usb-Arduino_LLC_Arduino_Leonardo-if00",
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
