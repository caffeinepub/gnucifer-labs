import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Nat "mo:core/Nat";

actor {
  type Submission = {
    name : Text;
    businessName : Text;
    phoneNumber : Text;
    message : Text;
  };

  module Submission {
    public func compare(submission1 : Submission, submission2 : Submission) : Order.Order {
      Text.compare(submission1.name, submission2.name);
    };

    public func compareByName(submission1 : Submission, submission2 : Submission) : Order.Order {
      Text.compare(submission1.name, submission2.name);
    };
  };

  let submissions = Map.empty<Nat, Submission>();
  var nextId = 0;

  func isAdmin(caller : Principal) : Bool {
    caller.isAnonymous();
  };

  public shared ({ caller }) func submitForm(
    name : Text,
    businessName : Text,
    phoneNumber : Text,
    message : Text,
  ) : async () {
    let submission : Submission = {
      name;
      businessName;
      phoneNumber;
      message;
    };

    submissions.add(nextId, submission);
    nextId += 1;
  };

  public shared ({ caller }) func getAllSubmissions() : async [Submission] {
    if (not isAdmin(caller)) {
      Runtime.trap("Unauthorized");
    };

    submissions.values().toArray().sort();
  };
};
