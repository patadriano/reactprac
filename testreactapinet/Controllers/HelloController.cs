using Microsoft.AspNetCore.Mvc;

namespace testreactapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HelloController : ControllerBase
    {
        // GET: api/hello
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new { message = "Hello, Worjhhjld!" });
        }
    }
}
