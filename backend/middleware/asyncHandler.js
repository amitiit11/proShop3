const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req,res,next)).catch(next); // passing error to the express
}

export default asyncHandler;