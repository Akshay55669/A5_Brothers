using EcomApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcomApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly EcomDbContext _context;
        private readonly IConfiguration _config;
        public UserController(IConfiguration config, EcomDbContext context)
        {
            _config = config;
            _context = context;
        }

        [HttpPost("CreatUser")]
        public ActionResult Create(Register register)
        {
            //register.MemberSince = DateTime.Now;
            _context.Registers.Add(register);
            _context.SaveChanges();
            return Ok("Success from creat method");
        }

        [HttpPost ("LoginUser")]
        public IActionResult Login(Login login)
        {
            var userAvailable = _context.Registers.Where(u => u.Email == login.Email && u.Password == login.Password).FirstOrDefault();
            if (userAvailable != null)
            {
                return Ok("Success");
            }
            return Ok("Failure");
            
        }
    }
}
