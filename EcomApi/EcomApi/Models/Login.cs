using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EcomApi.Models
{
    public class Login
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
      
        [MaxLength(600)]
        public string Email { get; set; }
        
        [MaxLength(150)]
        public string Password { get; set; }
    }
}
