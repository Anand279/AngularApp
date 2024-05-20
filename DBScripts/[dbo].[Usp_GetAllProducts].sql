CREATE PROCEDURE [dbo].[Usp_GetAllProducts]
 @PageNo INT ,  
 @PageSize INT ,  
 @SortOrder VARCHAR(200) 
 --EXEC [dbo].[Usp_GetAllProducts] 1,5,'Name'
 --EXEC [dbo].[Usp_GetAllProducts] 2,5,'Type'
AS
BEGIN
	SET NOCOUNT ON;
    Select * From   (Select ROW_NUMBER() Over (  
    Order by [Name] ) AS 'RowNum', *  
         from   dbo.Products  
        )t  where t.RowNum Between ((@PageNo-1)*@PageSize +1) AND (@PageNo*@pageSize) 
END
GO

