import { Novu } from '@novu/node';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
console.log(publicRuntimeConfig)
const { REACT_APP_NOVU_API_KEY, REACT_APP_NOVU_TRIGGER_ID } = publicRuntimeConfig;

const novu = new Novu(REACT_APP_NOVU_API_KEY);

type Payload = {
    name: string;
    species: string;
}

export const sendEmail = async (email: string, payload: Payload) => {
    if (!email) throw new Error("No email");
        await novu.trigger(REACT_APP_NOVU_TRIGGER_ID, {
        to: {
            email,
            subscriberId: email
        },
        payload,
    });
};