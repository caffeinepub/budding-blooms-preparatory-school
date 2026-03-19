import Text "mo:core/Text";
import Map "mo:core/Map";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Order "mo:core/Order";

actor {
  // Types
  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type AdmissionInquiry = {
    parentName : Text;
    childName : Text;
    childAge : Nat;
    programInterest : Text;
    phone : Text;
    email : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compare(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  module AdmissionInquiry {
    public func compare(a : AdmissionInquiry, b : AdmissionInquiry) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  // Persistent storage
  let contactSubmissions = Map.empty<Time.Time, ContactSubmission>();
  let admissionInquiries = Map.empty<Time.Time, AdmissionInquiry>();

  // Admin principal (placeholder, should be set securely)
  var adminPrincipal : ?Principal = null;

  // Set admin (should be secured in production)
  public shared ({ caller }) func setAdmin(principal : Principal) : async () {
    if (adminPrincipal != null) { Runtime.trap("Admin already set") };
    adminPrincipal := ?principal;
  };

  // Contact Form Feature
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async () {
    let timestamp = Time.now();
    let submission : ContactSubmission = {
      name;
      email;
      phone;
      message;
      timestamp;
    };
    contactSubmissions.add(timestamp, submission);
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    switch (adminPrincipal) {
      case (?admin) {
        if (caller != admin) { Runtime.trap("Unauthorized") };
      };
      case (null) { Runtime.trap("Admin not set") };
    };
    contactSubmissions.values().toArray().sort();
  };

  // Admission Inquiry Feature
  public shared ({ caller }) func submitAdmissionInquiry(
    parentName : Text,
    childName : Text,
    childAge : Nat,
    programInterest : Text,
    phone : Text,
    email : Text,
  ) : async () {
    let timestamp = Time.now();
    let inquiry : AdmissionInquiry = {
      parentName;
      childName;
      childAge;
      programInterest;
      phone;
      email;
      timestamp;
    };
    admissionInquiries.add(timestamp, inquiry);
  };

  public query ({ caller }) func getAllAdmissionInquiries() : async [AdmissionInquiry] {
    switch (adminPrincipal) {
      case (?admin) {
        if (caller != admin) { Runtime.trap("Unauthorized") };
      };
      case (null) { Runtime.trap("Admin not set") };
    };
    admissionInquiries.values().toArray().sort();
  };
};
