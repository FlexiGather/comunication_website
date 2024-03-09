---
sidebar_position: 2
---

# Functional Requirements

Since the FlexiGather is a big system we will have many actors. The main actors are the **participants**, the **medical, sales and entrance staff** and the **administrators**.

## Funcional Requirements

The funcional requirements are used to define the function of a software system.
We will separate the requirements by actors.

### Participants Requirements

- The participants will have access to their data, such as personal info and balance, it will be implemented in the **user interface**.
- The participants can login and logout.
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
- The medical staff can admit a patient.

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

<!-- r -->