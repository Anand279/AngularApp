using AngularApp.Server.Entity;

namespace AngularApp.Server.Services.Abstract
{
    public interface IInvoiceService
    {
        Task<List<InvoiceHeader>> GetAllInvoiceHeader();
        Task<InvoiceHeader> GetAllInvoiceHeaderbyCode(string invoiceno);
        Task<List<InvoiceDetail>> GetAllInvoiceDetailbyCode(string invoiceno);
        Task<ResponseType> Save(InvoiceInput invoiceEntity);
        Task<ResponseType> Remove(string invoiceno);
    }
}
