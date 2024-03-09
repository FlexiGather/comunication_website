---
sidebar_position: 2
---

# Requirements

Since the FlexiGather is a big system we will have many actors. The main acters are the **participants**, the **medical, sales and entrance staff** and the **administrators**.

## Funcional Requirements

The funcional requirements are used to define the function of a software system.
We will separate the requirements by actors.

### Participants Requirements

- The participants will have access to their data, such as personal info and balance, it will be implemented in the **user interface**.
<!-- history of entries and exists and purchases - CHECK HERE-->
- The participants can login and logout.
<!-- - The entries and exits are recorded, as well as the check-in and check-out. -->
- Allow the participants to enter and leave the premises.
- The participants can be admitted to the medical center.
- The participants can add money to their account.
- The participants can buy a product.
- The participants can exchange a product.
- The participants can raise their balance in the end of the event.
- The participants can receive a notification from the medical center.

### Medical Requirements

- The medical staff can login and logout.
- The medical staff has specialized accesses.
- The medical staff can access the participant's pre-filled medical file.
- The medical staff can create a new treatment file for a participant, it will be implemented in the **medical interface**.
- The medical staff can access the participant's treatment file's history.
- The medical staff can admit a pacient.

### Sales Requirements

**Point of sale**
- Allow the registration of a sale, it will be implemented in the **kiosk interface**.
- Allow the exchange of a product.
- The sales staff can consult the stock of the products.

**Loading point**
- Allow money to be loaded into the accounts of the participants.
- Return the remaining balance of the participants, at the end of the event.

**Both**
- The sales staff can login and logout.
- The sales staff can see the participant's balance.

### Administration Requirements

- Allow the check-in of the participants.
- Allow the check-out of the participants.
- The administration staff can login and logout.
- Allow the registration of participants.
- Allow the registration of staff.
- Allow the registration of all the entities related to the event theme.
- The administration staff can access all the participants entrance and exit flow.
- The administration staff can access the participants personal information.
- The administration staff can access the current products stock.
- The administration staff can access the medical center history.
- Offer workflow informations.
- Update and replace product stock.

### Entrance Requirements (staff at the entrance to the event)

- The entrance staff can login and logout.
- Record entries of the participants.
- Record exits of the participants.

## User Stories and Use Cases

### Participants

**As a** Participant **I want** to login in my account **so that** I can access my personal information.

**As a** Participant **I want** to see how much money I have in my account **so that** I can buy a sweatshirt at the sales point.

**As a** Participant **I want** to add money in my account **so that** I can use that money at the event.

**As a** Participant **I want** to raise my balance at the end of the event **so that** I can use that money outside the event.

**As a** Participant **I want** to be admitted in the medical center **so that** I can be treated if something is wrong.

**As a** Participant who is **Responsible** for other participants, **I want** to be notified when a participant I'm responsible for arrives to the medical center **so that** I can be able to follow what's going on.

<!-- ![alt text](img/usecase_participants.png) -->

### Medical Staff

**As a** Medical staff **I want** to access the medical center interface **so that** I can treat my pacients.

**As a** Medical staff **I want** to admit a pacient **so that** I can treat him.

**As a** Medical staff **I want** to create a pacient's treatment file **so that** their treatment and time in the medical center are documented.

**As a** Medical staff **I want** to access the participants medical file **so that** I can make the best decisions and give him the best treatments.

<!-- ![alt text](img/usecase_medicalstaff.png) -->

### Sales Staff

**As a** Sales staff of the Point of Sale **I want** to sale a product **so that** I can satisfy the participant wishes.

**As a** Sales staff of the Point of Sale **I want** to exchange a product **so that** I can improve the participants experience.

**As a** Sales staff of the Point of Sale **I want** to check the stock of the products **so that** I can manage remaining products.

**As a** Sales staff of the Loading Point **I want** to be able to read the participant identification **so that** I can load money in his account, exchanging the physical money.

**As a** Sales staff of the Loading Point **I want** to return the remaining balance of the participants **so that** they can have the money that belongs to them.

<!-- ![alt text](img/usecase_salesstaff.png) -->

### Administration

**As an** Administrator **I want** to check-in and check-out the participants **so that** I can assure the participants' security and engagement in the event.

**As an** Administrator **I want** to regist the participants and staff **so that** I can have access to their data.

**As an** Administrator **I want** to regist the participants and staff **so that** I can regist them in the system with a unique identification.

**As an** Administrator **I want** to access all the participants entrance and exit flow **so that** I can know what's going on and detect any security problem.

**As an** Administrator **I want** to access all the participants personal information **so that** they can help the participants if needed.

**As an** Administrator **I want** to access the current products stock **so that** I can manage the incoming stock.

**As an** Administrator **I want** to access the medical center history **so that** I can see the participants being treated and the ones who left already.

**As an** Administrator **I want** to offer workflow informations **so that** I can create reports and data analysis.

**As an** Administrator **I want** update and replace the stock **so that** I can manage the stock at the Point of Sales.

### Entrance Staff

**As an** Entrance Staff **I want** to regist the entries and exits of the participants **so that** I can manage the access of the participants.


<!-- ![alt text](img/usecase_administration.png) -->

## Non-functional Requirements

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

> **_note:_**  All the diagrams were made using [Microsoft-Visio](https://www.microsoft365.com/launch/visio).
<!-- r -->