using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers;

[ApiController]
public class PingController : BaseApiController
{
  [HttpGet("ping")]
  public IActionResult Ping()
  {
    return Ok(new { ping = "pong" });
  }
}