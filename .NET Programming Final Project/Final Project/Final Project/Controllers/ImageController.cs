using Microsoft.AspNetCore.Mvc;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;
using System.Drawing;

namespace Final_Project.Controllers
{
    public class ImageController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Index(IFormFile file)
        {   
            string fileName= string.Empty;
            string path= string.Empty;

            fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);
            path = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/images"));
                string fullPath = Path.Combine(path, fileName);

                using (var image = SixLabors.ImageSharp.Image.Load(file.OpenReadStream()))
                {
                    string newSize = ResizeImage(image, 800, 800);
                    string[] aSize = newSize.Split(',');
                    image.Mutate(h => h.Resize(Convert.ToInt32(aSize[1]), Convert.ToInt32(aSize[0])));
                    image.Save(fullPath);
                    TempData["message"] = "File uploaded successfully";
                }
    
                fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);
                path = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/images"));
                string fullPath1 = Path.Combine(path, fileName);
                using (var image = SixLabors.ImageSharp.Image.Load(file.OpenReadStream()))
                {
                    image.Mutate(h => h.Crop(Convert.ToInt32(500), Convert.ToInt32(500)));
                    image.Save(fullPath1);
                    TempData["message"] = "File uploaded successfully";

                }
         
                return View();
        }

            public string ResizeImage(SixLabors.ImageSharp.Image img, int maxWidth, int maxHeight)
        {
            if(img.Width>maxWidth || img.Width > maxHeight)
            {
                double widthRatio=(double)img.Width/(double)maxWidth;
                double heightRatio=(double)img.Height/(double)maxHeight;
                double ratio = Math.Max(widthRatio,heightRatio);
                int newWidth=(int)(img.Width/ratio);
                int newHeight=(int)(img.Height/ratio);
                return newHeight.ToString() + "," + newWidth.ToString();

            }
            else
            {
                return img.Height.ToString() + "," + img.Width.ToString();


            }
        }

        }    
}
