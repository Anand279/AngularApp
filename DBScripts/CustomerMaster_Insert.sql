USE [DemoDB]
GO

INSERT INTO [dbo].[tbl_Customer]
           ([Code],[Name] ,[Address],[Phoneno],[Email],[IsActive],[CreateUser] ,[ModifyUser] ,[CreateDate]  ,[ModifyDate])
     VALUES
           (N'202201', N'Virat Kohli', N'1st street,2nd block,Delhi', N'87789000', N'virat@in.com', 1, N'adminuser', N'adminuser', CAST(N'2022-07-09 00:00:00.000' AS DateTime), CAST(N'2024-07-09 00:00:00.000' AS DateTime))
GO
INSERT INTO [dbo].[tbl_Customer]
           ([Code],[Name] ,[Address],[Phoneno],[Email],[IsActive],[CreateUser] ,[ModifyUser] ,[CreateDate] ,[ModifyDate])
     VALUES
           (N'202202', N'Sachin Tendulkar', N'1st street,2nd block, Mumbai',null,null,null,null,null,null,null)
GO
INSERT INTO [dbo].[tbl_Customer]
           ([Code],[Name] ,[Address],[Phoneno],[Email],[IsActive],[CreateUser] ,[ModifyUser] ,[CreateDate] ,[ModifyDate])
     VALUES
           (N'202203', N'Rohit Sharma', N'1st street,2nd block, Mumbai',null,null,null,null,null,null,null)
GO
INSERT INTO [dbo].[tbl_Customer]
           ([Code],[Name] ,[Address],[Phoneno],[Email],[IsActive],[CreateUser] ,[ModifyUser] ,[CreateDate]  ,[ModifyDate])
     VALUES
           (N'202204', N'Rahul Sharma', N'1st street,2nd block,Chennai',null,null,null,null,null,null,null)
GO
INSERT INTO [dbo].[tbl_Customer]
           ([Code],[Name] ,[Address],[Phoneno],[Email],[IsActive],[CreateUser] ,[ModifyUser] ,[CreateDate]  ,[ModifyDate])
     VALUES
           (N'202205', N'Dhoni', N'1st street,2nd block,Ranchi',null,null,null,null,null,null,null)
GO
INSERT INTO [dbo].[tbl_Customer]
           ([Code],[Name] ,[Address],[Phoneno],[Email],[IsActive],[CreateUser] ,[ModifyUser] ,[CreateDate]  ,[ModifyDate])
     VALUES
           (N'202206', N'Yuvraj Singh', N'1st street,2nd block, Chandigarh',null,null,null,null,null,null,null)
GO
INSERT INTO [dbo].[tbl_Customer]
           ([Code],[Name] ,[Address],[Phoneno],[Email],[IsActive],[CreateUser] ,[ModifyUser] ,[CreateDate]  ,[ModifyDate])
     VALUES
           (N'202207', N'Adam GilChrist', N'1st street,2nd block,Melbourne',null,null,null,null,null,null,null)
GO
INSERT INTO [dbo].[tbl_Customer]
           ([Code],[Name] ,[Address],[Phoneno],[Email],[IsActive],[CreateUser] ,[ModifyUser] ,[CreateDate]  ,[ModifyDate])
     VALUES
           (N'202208', N'Z Khan', N'1st street,2nd block, Mumbai', N'87789000',null,null,null,null,null,null,null)
GO
INSERT INTO [dbo].[tbl_Customer]
           ([Code],[Name] ,[Address],[Phoneno],[Email],[IsActive],[CreateUser] ,[ModifyUser] ,[CreateDate]  ,[ModifyDate])
     VALUES
           (N'202210', N'Faf Duplesis', N'1st street,2nd block, Cape Town',null,null,null,null,null,null,null)
GO


INSERT [dbo].[tbl_product] ([Code], [Name], [Price], [Category]) VALUES (N'p101', N'Cricket Bat', CAST(1000.000 AS Decimal(18, 3)), 1)
GO
INSERT [dbo].[tbl_product] ([Code], [Name], [Price], [Category]) VALUES (N'p102', N'Ball', CAST(100.000 AS Decimal(18, 3)), 2)
GO
INSERT [dbo].[tbl_product] ([Code], [Name], [Price], [Category]) VALUES (N'p103', N'Pad', CAST(250.000 AS Decimal(18, 3)), 1)
GO