using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Arithmetic.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperacionesController : ControllerBase
    {
        [HttpGet("sum")]
        public ActionResult<int> Sum(int num1, int num2)
        {
            int result = num1 + num2;
            return Ok(result);
        }

        [HttpGet("subtract")]
        public ActionResult<int> Subtract(int num1, int num2)
        {
            int result = num1 - num2;
            return Ok(result);
        }

        [HttpGet("multiply")]
        public ActionResult<int> Multiply(int num1, int num2)
        {
            int result = num1 * num2;
            return Ok(result);
        }

        [HttpGet("divide")]
        public ActionResult<double> Divide(int num1, int num2)
        {
            if (num2 == 0)
            {
                return BadRequest("No se puede dividir entre cero.");
            }

            double result = (double)num1 / num2;
            return Ok(result);
        }
    }
}
