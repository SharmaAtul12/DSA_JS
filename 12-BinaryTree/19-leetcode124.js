var maxPathSum = function(root) {
    let maxSum = -Infinity;

    let traverse = (curr) => {
        if(!curr) return 0;

        //! Agr Mera Path he -ve hh , Vo mere maxAnswer ko less he krega , so usko consider he nhi kr rhe .. 
        //! agr kisi path ka maxSum -ve aaya , so uski jagah 0 return kr denge .. taki mera maxAnswer decrease na ho ..  
        let leftSubtreeMaxPathSum = Math.max(0,traverse(curr.left))
        let rightSubtreeMaxPathSum = Math.max(0,traverse(curr.right))
        
        let currMaxPathSum = curr.val + leftSubtreeMaxPathSum + rightSubtreeMaxPathSum;
        maxSum = Math.max(maxSum,currMaxPathSum);

        //! Parent ko ham , ek he path bta skte hh , which parent can move to either (left or right) so we need it will extend 
        //! to maxValue path . isliye max le rhe from (left and right)
        return curr.val + Math.max(leftSubtreeMaxPathSum,rightSubtreeMaxPathSum)

    }

    traverse(root);
    return maxSum;
}; 