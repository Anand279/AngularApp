using AngularApp.Server.Entity;
using AngularApp.Server.Services.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InvoiceController : Controller
    {
        private readonly IInvoiceService invoiceService;
        public InvoiceController(IInvoiceService invoiceService)
        {
            this.invoiceService = invoiceService;
        }

        [HttpGet("GetAllHeader")]
        public async Task<List<InvoiceHeader>> GetAllHeader()
        {
            return await this.invoiceService.GetAllInvoiceHeader();

        }
        [HttpGet("GetAllHeaderbyCode")]
        public async Task<InvoiceHeader> GetAllHeaderbyCode(string invoiceno)
        {
            return await this.invoiceService.GetAllInvoiceHeaderbyCode(invoiceno);

        }

        [HttpGet("GetAllDetailbyCode")]
        public async Task<List<InvoiceDetail>> GetAllDetailbyCode(string invoiceno)
        {
            return await this.invoiceService.GetAllInvoiceDetailbyCode(invoiceno);

        }

        [HttpPost("Save")]
        public async Task<ResponseType> Save([FromBody] InvoiceInput invoiceEntity)
        {
            return await this.invoiceService.Save(invoiceEntity);

        }

        [HttpDelete("Remove")]
        public async Task<ResponseType> Remove(string InvoiceNo)
        {
            return await this.invoiceService.Remove(InvoiceNo);

        }
    }
}
