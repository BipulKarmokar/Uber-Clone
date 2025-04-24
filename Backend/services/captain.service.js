const captainModel = require('../models/captain.model');


module.exports.createCaptain = async (captainData) => {
    try {
        // Add await here - this was missing
        const newCaptain = await captainModel.create({
            fullName: {
                firstName: captainData.fullName.firstName,
                lastName: captainData.fullName.lastName
            },
            email: captainData.email,
            password: captainData.password,
            vehicle: {
                color: captainData.vehicle.color,
                plate: captainData.vehicle.plate,
                capacity: captainData.vehicle.capacity,
                vehicleType: captainData.vehicle.vehicleType
            },
            location: {
                lat: captainData.location.lat,
                lng: captainData.location.lng
            }
        });
        return newCaptain;
    } catch (error) {
        throw new Error(`Failed to create captain: ${error.message}`);
    }
};