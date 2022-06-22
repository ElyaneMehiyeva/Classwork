using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiIntro.Models
{
    public class Actor
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string ImageUrl { get; set; }
        public DateTime CreateTime { get; set; }
        public bool IsDeleted { get; set; }


    }
}
