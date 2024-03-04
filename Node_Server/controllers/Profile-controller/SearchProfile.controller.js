const express=require('express');
const Profile=require('../../models/profile.model');

async function  searchProfile(req,res){

    console.log(req.params.key)
    try{
        
            const search_profile=await Profile.find(
                {
                    '$or':[
                        {
                            // username: { $regex: req.params.key ,$options: 'i' },
                            name: { $regex: req.params.key ,$options: 'i' },
                    }
                    ]
                }
            )

        // console.log(search_profile)
        res.json({ message: "Profile Get Successful", search_profile});

    }
    catch(error)
    {
        console.log(error)
    }
}

module.exports=searchProfile;