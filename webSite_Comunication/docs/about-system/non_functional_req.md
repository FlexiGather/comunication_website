---
sidebar_position: 3
---

# Non-functional Requirements

Non-functional requirements are requirements related to the use of the application in terms of performance, usability, reliability, security, availability, maintenance and the technologies involved. These requirements concern how the functionalities will be delivered to the software user.

### Functionality

- The system should be able to read QRcodes.
<!-- (nfc bracelets) -->
- The system should allow the use of more than one browser.

### Performance

- The system should handle large volumes of audiences (data capacity).
- After a money top-up/load, the money must be available in the participants' account in less than 5 seconds (throughput).
- The system should warn the responsibles chiefs in less than 3 seconds whenever a child on their charge entries in the medical center (response time).

### Security

- Only sales staff can load up cash into someones account.
- Only sales staff can make a sale or exchange.
- Only medical ad administration staff can have access to the participants health information.
- Only medical and administration staff can have access to the medical center area.
- Only medical staff can create and fill a new treatment file for a participant.

### Availability

- All the interfaces (except the kiosk) should be available 24/7, this including during the night.
- If the system crashes, the data should not be lost.
<!-- - If the system crashes, it should be able to recover the data in less than 5 minutes. -->

<!-- r -->