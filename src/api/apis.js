import base from "./base";

export async function AddContact({ name, email, phone, message }) {
    const payload = { name, email, phone, message };
    const response = await base.post(`/api/contact/add_contact`, payload, {
        headers: { "Content-Type": "application/json" },
    });
    return response?.data;
}

export async function AddSchedule({ name, email, phone, reason }) {
    const payload = { name, email, phone, reason };
    const response = await base.put(`/api/schedule/create_schedule`, payload, {
        headers: { "Content-Type": "application/json" },
    });
    return response?.data;
}
