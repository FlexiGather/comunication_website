---
sidebar_position: 6
---

# Architecture

The architecture of this system, shown in the diagram, aims to develop 6 interfaces, 3 websites, and 3 progressive web apps. To render these interfaces and develop the backend, the platform has a centralized database developed in SQL Server, as its main component. 

Additionally, to facilitate the interaction between the database and the rest of the system, it uses an Object-Relational Mapper (ORM), the Entity Framework Core Power Tools, which allows for reverse engineering. Reverse engineering enables the creation of models from the structure of the database, speeding up and simplifying the development process. 

After creating the models, the entire system is based on the Model-View-Controller (MVC) architecture. The model represents the data, the controller processes all user interactions, and the view presents the user interface.

<!-- Imagem antiga da arquitetura -->
<!-- ![image](@site/static/img/arquitetura/arquitetura_m.png) -->

<!-- Imagem mais legivel -->
<!-- ![image](@site/static/img/arquitetura/arquitetura_melhorada_m.png) -->

<!-- Imagem com improves do canadiano -->
![image](@site/static/img/arquitetura/Arquitetura_Canadiano_m.png)

Our database is implemented in **SQL Server**, the connections will be implemented with **Entity Framework PowerTools** from **ASP.NET Core** and the frontend using **HTML**, **CSS**, **Bootstrap** and **C#** dependencies.

> **_note:_**  This diagram was made using [Lucid.app](https://lucid.app).