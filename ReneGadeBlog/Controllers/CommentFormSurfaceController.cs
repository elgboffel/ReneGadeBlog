using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Umbraco.Web.Mvc;
using ReneGadeBlog.Models;

namespace ReneGadeBlog.Controllers
{
    public class CommentFormSurfaceController : SurfaceController
    {
        public ActionResult Index()
        {
            return PartialView("_CommentForm", new CommentFormViewModel());
        }

        [HttpPost]
        public ActionResult HandleSubmitForm(CommentFormViewModel model)
        {
            
            if (!ModelState.IsValid)
                return CurrentUmbracoPage();

            string url = model.FirstName + " " + model.LastName;

            var newComment = Services.ContentService.CreateContent(url, CurrentPage.Id, "Comment");
            newComment.SetValue("firstName", model.FirstName);
            newComment.SetValue("lastName", model.LastName);
            newComment.SetValue("comment", model.Comment);

            Services.ContentService.SaveAndPublishWithStatus(newComment);

            TempData["success"] = true;

            return RedirectToCurrentUmbracoPage();
        }
    }
}