USE [DemoDB]
GO

/****** Object:  Table [dbo].[tbl_Category]    Script Date: 2/29/2024 3:57:32 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tbl_Category](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

USE [DemoDB]
GO

/****** Object:  Table [dbo].[tbl_Customer]    Script Date: 2/29/2024 3:59:56 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tbl_Customer](
	[Code] [nvarchar](20) NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[Address] [nvarchar](max) NULL,
	[Phoneno] [nvarchar](50) NULL,
	[Email] [nvarchar](50) NULL,
	[IsActive] [bit] NULL,
	[CreateUser] [nvarchar](50) NULL,
	[ModifyUser] [nvarchar](50) NULL,
	[CreateDate] [datetime] NULL,
	[ModifyDate] [datetime] NULL,
 CONSTRAINT [PK_tbl_customer] PRIMARY KEY CLUSTERED 
(
	[Code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

USE [DemoDB]
GO

/****** Object:  Table [dbo].[tbl_mastervariant]    Script Date: 2/29/2024 4:00:06 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tbl_mastervariant](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[VarinatType] [varchar](1) NULL,
	[VarintName] [varchar](20) NULL,
 CONSTRAINT [PK_tbl_mastervariant] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

USE [DemoDB]
GO

/****** Object:  Table [dbo].[tbl_product]    Script Date: 2/29/2024 4:00:19 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tbl_product](
	[Code] [varchar](20) NOT NULL,
	[Name] [varchar](250) NULL,
	[Price] [decimal](18, 3) NULL,
	[Category] [int] NULL,
 CONSTRAINT [PK_tbl_product] PRIMARY KEY CLUSTERED 
(
	[Code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


USE [DemoDB]
GO

/****** Object:  Table [dbo].[tbl_productvarinat]    Script Date: 2/29/2024 4:00:41 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tbl_productvarinat](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ProductCode] [varchar](20) NULL,
	[Price] [decimal](18, 2) NULL,
	[Remarks] [nvarchar](100) NULL,
 CONSTRAINT [PK_tbl_productvarinat] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

USE [DemoDB]
GO

/****** Object:  Table [dbo].[tbl_SalesHeader]    Script Date: 2/29/2024 4:00:51 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tbl_SalesHeader](
	[InvoiceNo] [nvarchar](20) NOT NULL,
	[InvoiceDate] [smalldatetime] NOT NULL,
	[CustomerId] [nvarchar](20) NOT NULL,
	[Customer Name] [nvarchar](100) NULL,
	[DeliveryAddress] [ntext] NULL,
	[Remarks] [ntext] NULL,
	[Total] [numeric](18, 2) NULL,
	[Tax] [numeric](18, 4) NULL,
	[NetTotal] [numeric](18, 2) NULL,
	[CreateUser] [nvarchar](50) NULL,
	[CreateDate] [smalldatetime] NULL,
	[ModifyUser] [nvarchar](50) NULL,
	[ModifyDate] [smalldatetime] NULL,
 CONSTRAINT [PK_tbl_SaleHeader] PRIMARY KEY CLUSTERED 
(
	[InvoiceNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

USE [DemoDB]
GO

/****** Object:  Table [dbo].[tbl_SalesProductInfo]    Script Date: 2/29/2024 4:01:05 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tbl_SalesProductInfo](
	[InvoiceNo] [nvarchar](20) NOT NULL,
	[ProductCode] [nvarchar](20) NOT NULL,
	[ProductName] [nvarchar](100) NULL,
	[Qty] [int] NULL,
	[SalesPrice] [numeric](18, 3) NULL,
	[Total] [numeric](18, 2) NULL,
	[CreateUser] [nvarchar](50) NULL,
	[CreateDate] [smalldatetime] NULL,
	[ModifyUser] [nvarchar](50) NULL,
	[ModifyDate] [smalldatetime] NULL,
 CONSTRAINT [PK_tbl_SalesInvoiceDetail] PRIMARY KEY CLUSTERED 
(
	[InvoiceNo] ASC,
	[ProductCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


