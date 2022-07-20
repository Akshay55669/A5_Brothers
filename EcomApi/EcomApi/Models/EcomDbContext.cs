using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcomApi.Models
{
    public class EcomDbContext : DbContext
    {
        string connectionString;

        public DbSet<Register> Registers { get; set; }
        

        public EcomDbContext()
        {
            connectionString = "server=(localdb)\\MSSQLLocalDB;database=EcomProject;integrated security=true; MultipleActiveResultSets=True;trustservercertificate=true";
        }

        public EcomDbContext(string path) : base()
        {
            connectionString = path;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder
             optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer(connectionString);
        }
    }
}
