using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LotteryNumberApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LotteryController : ControllerBase
    {
        private List<int> GenerateLotteryNumbers(int count, int range)
        {
            var numbers = new HashSet<int>();
            var random = new Random();
            
            while (numbers.Count < count)
            {
                int num = random.Next(1, range + 1);
                numbers.Add(num);
            }
            
            return numbers.OrderBy(n => n).ToList();
        }

        [HttpGet("generate")]
        public IActionResult GetLotteryNumbers()
        {
            var mainNumbers = GenerateLotteryNumbers(6, 49);
            int bonusNumber = GenerateLotteryNumbers(1, 49)[0];
            
            return Ok(new
            {
                mainNumbers,
                bonusNumber
            });
        }
    }
}
