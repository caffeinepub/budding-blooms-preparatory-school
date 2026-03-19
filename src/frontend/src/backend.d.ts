import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface AdmissionInquiry {
    email: string;
    childAge: bigint;
    programInterest: string;
    timestamp: Time;
    phone: string;
    childName: string;
    parentName: string;
}
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface backendInterface {
    getAllAdmissionInquiries(): Promise<Array<AdmissionInquiry>>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    setAdmin(principal: Principal): Promise<void>;
    submitAdmissionInquiry(parentName: string, childName: string, childAge: bigint, programInterest: string, phone: string, email: string): Promise<void>;
    submitContactForm(name: string, email: string, phone: string, message: string): Promise<void>;
}
