using ApiIntro.DAL;
using ApiIntro.DTO;
using ApiIntro.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiIntro.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActorController : ControllerBase
    {
        private readonly AppDbContext _context;
        public ActorController(AppDbContext context)
        {
            _context = context;
        }
        [Route("")]
        public IActionResult AllData()
        {
            List<Actor> actors = _context.Actors.ToList();
            return Ok(actors);
        }
        [HttpPost]
        public IActionResult Create(ActorDTO actorDTO)
        {
            Actor actor = new Actor()
            {
                FullName = actorDTO.Name,
                ImageUrl = actorDTO.Image,
                IsDeleted = false,
                CreateTime = DateTime.Now
            };
            _context.Actors.Add(actor);
            _context.SaveChanges();
            return NoContent();
        }
        [Route("{id}")]
        public IActionResult Delete(int id)
        {
            Actor actor = _context.Actors.Find(id);
            if(actor != null)
            {
                _context.Actors.Remove(actor);
                _context.SaveChanges();
            }
            return NoContent();
        }

    }
}
